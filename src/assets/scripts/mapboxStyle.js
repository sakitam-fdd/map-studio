import axios from 'axios'
import mapboxGlFunction from '@mapbox/mapbox-gl-style-spec/function'
import applyStyleFunction from 'mapbox-to-ol-style'
class MapBoxStyle {
  constructor (map, layer, $StyleUrl) {
    this.accessToken = ''
    this.baseUrl = ''
    this.$Path = ''
    this.$Host = ''
    this.SourceId = ''
    this.layerIds = []
    this.$Map = map
    if (typeof $StyleUrl === 'string') {
      let parts = $StyleUrl.match(MapBoxStyle.spriteRegEx)
      if (parts) {
        this.baseUrl = parts[1]
        this.accessToken = parts.length > 2 ? parts[2] : ''
      }
      axios.get($StyleUrl).then(response => {
        let glStyle = response['data']
        let a = document.createElement('A')
        a.href = glStyle
        this.$Path = a.pathname.split('/').slice(0, -1).join('/') + '/'
        this.$Host = $StyleUrl.substr(0, $StyleUrl.indexOf(this.$Path))
        if (glStyle.sprite) {
          if (glStyle.sprite.indexOf('mapbox://') === 0) {
            glStyle.sprite = this.baseUrl + '/sprite' + this.accessToken
          } else if (glStyle.sprite.indexOf('http') !== 0) {
            glStyle.sprite = this.$Host + this.$Path + glStyle.sprite + this.accessToken
          }
        }
        this.processStyle(glStyle)
        this.loadSpriteData(layer, glStyle, this.SourceId)
      }).catch(function (error) {
        console.log(error)
      })
    } else {
      this.processStyle($StyleUrl)
    }
    return map
  }

  processStyle (style) {
    if (!style.layers) {
      throw new Error('数据不完整：' + style)
    }
    let layers = style.layers
    for (let i = 0, ii = layers.length; i < ii; ++i) {
      let layer = layers[i]
      if (layer.type === 'background') {
        this.setBackground(this.$Map, layer)
      } else {
        let id = layer.source || MapBoxStyle.getSourceIdByRef(layers, layer.ref)
        if (id !== this.SourceId) {
          this.SourceId = id
        }
        this.layerIds.push(layer.id)
      }
    }
  }

  loadSpriteData (layer, style, layerIds) {
    let spriteScale = window.devicePixelRatio >= 1.5 ? 0.5 : 1
    let sizeFactor = spriteScale === 0.5 ? '@2x' : ''
    let spriteUrl = MapBoxStyle.toSpriteUrl(style.sprite, this.$Path, sizeFactor + '.json')
    let spriteImageUrl = MapBoxStyle.toSpriteUrl(style.sprite, this.$Path, sizeFactor + '.png')
    axios.get(spriteUrl).then(response => {
      let spriteData = response['data']
      applyStyleFunction(layer, style, layerIds, undefined, spriteData, spriteImageUrl, undefined)
      this.$Map.addLayer(layer)
    })
      .catch(function (error) {
        console.log(error)
      })
  }

  applyBackground (map, glStyle) {
    glStyle.layers.some((l) => {
      if (l.type === 'background') {
        this.setBackground(map, l)
        return true
      }
    })
  }

  setBackground (map, layer) {
    function updateStyle () {
      let layout = layer.layout || {}
      let paint = layer.paint || {}
      let element = map.getTargetElement()
      let zoom = map.getView().getZoom()
      if ('background-color' in paint) {
        element.style.backgroundColor =
          mapboxGlFunction(paint['background-color'], {function: 'piecewise-constant'})(zoom)
      }
      if ('background-opacity' in paint) {
        element.style.backgroundOpacity =
          mapboxGlFunction(paint['background-opacity'], {function: 'interpolated'})(zoom)
      }
      if (layout.visibility === 'none') {
        element.style.backgroundColor = ''
        element.style.backgroundOpacity = ''
      }
    }

    if (map.getTargetElement()) {
      updateStyle()
    }
    map.on(['change:resolution', 'change:target'], updateStyle)
  }

  static spriteRegEx = /^(.*)(\?.*)$/
  static getSourceIdByRef = (layers, ref) => {
    let sourceId
    layers.some(function (layer) {
      if (layer.id === ref) {
        sourceId = layer.source
        return true
      }
    })
    return sourceId
  }
  static toSpriteUrl = (url, path, extension) => {
    url = MapBoxStyle.withPath(url, path)
    let parts = url.match(MapBoxStyle.spriteRegEx)
    return parts ? parts[1] + extension + (parts.length > 2 ? parts[2] : '')
      : url + extension
  }
  static withPath = (url, path) => {
    if (path && url.indexOf('http') !== 0) {
      url = path + url
    }
    return url
  }
}
export default MapBoxStyle
