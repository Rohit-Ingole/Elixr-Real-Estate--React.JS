import { menuData } from "../../data/MenuData";

import Button from "../Button";

import * as style from "./styles";

const DropDown = ({ isOpen, toggle }) => {
  return (
    <style.DropdownContainer isOpen={isOpen} onClick={toggle}>
      <style.Icon onClick={toggle}>
        <style.CloseIcon />
      </style.Icon>

      <style.DropdownWrapper>
        <style.DropdownMenu>
          {menuData.map((item, index) => (
            <style.DropdownLink to={item.link} key={index}>
              {item.title}
            </style.DropdownLink>
          ))}
        </style.DropdownMenu>

        <style.BtnWrap>
          <Button
            content="Contate-Nos"
            primary={true}
            round={true}
            big={true}
            to="/contact"
          />
        </style.BtnWrap>
      </style.DropdownWrapper>
    </style.DropdownContainer>
  );
};

export default DropDown;
