import { Link } from "react-router-dom";

import "./Button.css";

function Button(props) {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button-inverse"
        } ${props.danger && "button--danger"} ${props.tab && "button--tab"} ${
          props.tabActive && "button--tab-active"
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${props.tab && "button--tab"} ${
          props.tabActive && "button--tab-active"
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"} ${props.tab && "button--tab"} ${
        props.tabActive && "button--tab-active"
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
