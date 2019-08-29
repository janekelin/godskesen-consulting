import { findDOMNode } from 'react-dom';
import PictureDecorated from './PictureDecorated';
import React, { Component } from 'react';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style : {},
    }

    const defaultSettings = {
      reverse: false,
      max: 16,
      perspective: 1400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: "1.05",
      speed: "1200",
      transition: true,
      axis: null,
      reset: true
    };

    this.person = props.person;
    this.settings = defaultSettings;
    this.reverse = this.settings.reverse ? -1 : 1;

    this.onMouseEnter = this.onMouseEnter.bind(this, this.props.onMouseEnter);
    this.onMouseLeave = this.onMouseLeave.bind(this, this.props.onMouseLeave);
    this.onMouseMove = this.onMouseMove.bind(this, this.props.onMouseMove);
  }

  // Lifecycle
  componentDidMount() {
    this.element = findDOMNode(this);
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTimeout);
    cancelAnimationFrame(this.updateCall);
  }

  // Events
  onMouseEnter(cb = () => {}, e) {
    this.updateElementPosition();

    this.setState(this.setNewValue('willChange', 'transform'));

    this.setTransition();

    return cb(e)
  }

  onMouseLeave(cb = () => {}, e) {
    this.setTransition();

    this.settings.reset && this.reset();

    return cb(e)
  }

  onMouseMove(cb = () => {}, e) {
    e.persist();

    this.updateCall && window.cancelAnimationFrame(this.updateCall);

    this.event = e;
    this.updateCall = requestAnimationFrame(this.update.bind(this, e));

    return cb(e);
  }

  // Helper Functions
  getValues(e) {
    const {min, max} = Math;

    const x = (e.nativeEvent.clientX - this.left) / this.width;
    const y = (e.nativeEvent.clientY - this.top) / this.height;
    const _x = min(max(x, 0), 1);
    const _y = min(max(y, 0), 1);

    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2);
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);

    const percentageX =  _x * 100
    const percentageY = _y * 100

    return ({
      tiltX,
      tiltY,
      percentageX,
      percentageY
    });

  }

  reset() {
    window.requestAnimationFrame(() => {
      const newTransform = `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      this.setState(this.setNewValue("transform", newTransform))
    });
  }

  setNewValue(nestedKey, newValue, key="style"){
    return Object.assign({}, this.state, {
      [key] : {
        ...this.state[key],
        [nestedKey] : newValue
      }
    });
  }

  setTransition() {
    this.transitionTimeout && clearTimeout(this.transitionTimeout);

    const {easing, speed} = this.settings;
    const newTransition = `${speed}ms ${easing}`;

    this.setState(this.setNewValue('transition', newTransition));

    this.transitionTimeout = setTimeout(() => this.setState(this.setNewValue('transition', '')), speed);
  }

  update(e) {
    const {axis, perspective, scale} = this.settings;
    const {tiltX, tiltY} = this.getValues(e);
    const newPerspective = `perspective(${perspective}px)`;
    const newRotateX = `rotateX(${axis === "x" ? 0 : tiltY}deg)`;
    const newRotateY = `rotateY(${axis === "y" ? 0 : tiltX}deg)`;
    const newScale3d = `scale3d(${scale}, ${scale}, ${scale})`;
    const newTransform = `${newPerspective} ${newRotateX} ${newRotateY} ${newScale3d}`;

    this.setState(this.setNewValue('transform', newTransform));

    this.updateCall = null;
  }

  updateElementPosition() {
    const rect = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  // Rendering
  render() {
    const {style} = this.state;
    const {link, name, subtitle, pic} = this.person;
    const VIEWBOX = "0 0 300 415";
    const SVGBORDER = "M20.5,20.5h260v375h-260V20.5z";
    const desc = `an outline for ${name}'s profile card`;

    return (
      <a 
        className="tilt" 
        href={link}
        style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      >
        <PictureDecorated pic={pic} name={name} subtitle={subtitle} desc={desc} viewbox={VIEWBOX} svgBorder={SVGBORDER} />
      </a>
    );
  }
}

export default Card;
