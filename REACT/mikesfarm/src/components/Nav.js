import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap';

const Nav = (props) => {

    Nav.propTypes = {
        tabs: PropTypes.bool,
        pills: PropTypes.bool,
        card: PropTypes.bool,
        justified: PropTypes.bool,
        fill: PropTypes.bool,
        vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        horizontal: PropTypes.string,
        navbar: PropTypes.bool,
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        // pass in custom element to use
      }

    NavItem.propTypes = {
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        active: PropTypes.bool,
        // pass in custom element to use
      }

    NavLink.propTypes = {
        disabled: PropTypes.bool,
        active: PropTypes.bool,
        // pass in custom element to use
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        // ref will only get you a reference to the NavLink component, use innerRef to get a reference to the DOM element (for things like focus management).
        innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
      }
    return(
        <div>
      <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link Based</p>
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
    );
}
export default Nav