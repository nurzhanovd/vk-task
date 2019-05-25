import React from "react";
import "./Draggable.scss";

export class Draggable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        appended: false
        };
    }

    setElementSize = ({offsetHeight ,offsetWidth}) => {
        this.setState({
        size: {
            height: offsetHeight,
            width: offsetWidth
        }
        }, 
        () => this.props.onDragStart({
            width: offsetWidth,
            height: offsetHeight
        }))
    }

    moveElement = (element, { pageX, pageY }) => {
        if (pageX > 0 && pageY > 0) {
        element.style.top = pageY - element.offsetHeight / 2 + "px";
        element.style.left = pageX - element.offsetWidth / 2 + "px";
        }
    };

    render() {
        const {
        onDragEnd,
        onDragStart
        } = this.props;

        return (
        <>
            <div
            className="draggable"
            draggable={true}
            onDrag={e => {
                const target = e.target;
                if (!this.state.appended) {
                document.body.appendChild(target);
                this.setState({
                    appended: true
                });
                }

                this.moveElement(target, e);
            }}
            onDragStart={e => {
                this.setElementSize(e.target);
                // const el = document.createElement("span");
                // el.style.display = "hidden";
                // el.style.width = e.target.children['0'].style.width
                // el.style.width = "200px";
                // el.style.height = e.target.children['0'].style.height
                // el.style.height = "200px";
                // el.style.border = "1px solid";
                // e.dataTransfer.setDragImage(el, 0, 0);
                e.dataTransfer.setData("id", "asdasd");
            }}
            onDragEnd={ (e) => {
                e.preventDefault()
            } }
            >
            {this.props.children}
            </div>
        </>
        );
    }
}
