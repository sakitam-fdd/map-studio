import $Overlay from 'ol/overlay'
import $GeomPoint from 'ol/geom/point'
class Popover extends $Overlay {
  constructor (options = {}) {
    let element = options['element']
    let stopEvent = true
    let offset = options['offset']
    let insertFirst = true
    let id = options['id']
    super(element, stopEvent, offset, id, insertFirst)
  }

  updateSize () {
    this.container.style.marginLeft = (-this.container.clientWidth / 2) - 1 + 'px'
    this.container.style.display = 'block'
    this.container.style.opacity = 1
    this.content.scrollTop = 0
    this.map.render()
    return this
  }

  removePopover () {
    this.container.style.display = 'none'
    if (this && this.options['id']) {
      this.map.removeOverlay(this)
    }
    return this
  }
  show (options) {
    let center = []
    if (options['dataProjection'] && options['featureProjection']) {
      let geom = new $GeomPoint(options['center'])
      center = geom.transform(options['dataProjection'], options['featureProjection']).getCoordinates()
    } else {
      center = options['center']
    }
    if (options['element'] instanceof HTMLElement) {
      this.content.innerHTML = ''
      this.content.appendChild(options['element'])
    } else {
      this.content.innerHTML = options['element']
    }
    this.container.style.display = 'block'
    this.content.scrollTop = 0
    if (options['properties']) {
      this.setProperties(options['properties'])
    }
    this.setOffset(options['offset'])
    this.setPosition(center)
    this.updateSize()
    return this
  }
}
export default Popover
