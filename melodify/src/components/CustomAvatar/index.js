import Icon from "@ant-design/icons";

import { avatarsList } from "./constant";
import { StyledAvatar } from "./styled";

const CustomAvatar = ({ photo, background = "white", size = "55px", index = 0 }) => {
    const getRandomAvatar = (avatarsList) => {
        const index = Math.floor(Math.random() * avatarsList.length);
        return avatarsList[index];
    };

    return (
        <StyledAvatar
            className="custom-avatar"
            style={{ background, height: size, width: size }}
            src={photo && photo}
            icon={!photo && <Icon component={getRandomAvatar(avatarsList)} />}
        />
    );
};

export default CustomAvatar;
