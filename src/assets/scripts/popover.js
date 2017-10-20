import $Overlay from 'ol/overlay'
import $GeomPoint from 'ol/geom/point'
class Popover extends $Overlay {
  constructor (map, options = {}) {
    let element = document.createElement('div')
    element.className = options['className'] ? options['className'] : 'popover-content'
    let stopEvent = true
    let offset = options['offset']
    let insertFirst = true
    let id = options['id']
    if (options['element'] instanceof HTMLElement) {
      element.innerHTML = ''
      element.appendChild(options['element'])
    } else {
      element.innerHTML = options['element']
    }
    super({
      element: element,
      stopEvent: stopEvent,
      offset: offset,
      id: id,
      insertFirst: insertFirst,
      positioning: options['positioning'] ? options['positioning'] : 'top-left'
    })
    this.map = map
    this.options = options
    this.show(options, element)
  }

  /**
   * 更新size
   * @param element
   * @returns {Popover}
   */
  updateSize (element) {
    // element.style.marginLeft = (-element.clientWidth / 2) - 1 + 'px'
    this.map.render()
  }

  /**
   * 移除popover
   */
  removePopover () {
    if (this && this.options['id']) {
      this.map.removeOverlay(this)
    }
  }

  /**
   * 显示气泡
   * @param options
   * @param element
   */
  show (options, element) {
    let center = []
    if (options['dataProjection'] && options['featureProjection']) {
      let geom = new $GeomPoint(options['center'])
      center = geom.transform(options['dataProjection'], options['featureProjection']).getCoordinates()
    } else {
      center = options['center']
    }
    if (options['properties']) {
      this.setProperties(options['properties'])
    }
    this.setPosition(center)
    this.updateSize(element)
  }
}
export default Popover
