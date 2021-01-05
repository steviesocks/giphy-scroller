import React from 'react';

import useStyles from './user.styles';

import verifiedIcon from '../../assets/verifiedIcon.svg'

const User = ({ user }) => {

    const classes = useStyles()

    const { avatar_url, username, is_verified, display_name } = user;

    return (
        <div className={classes.user}>
            <img className={classes.avatar} src={avatar_url} alt="" />
            <div>
                <h4 className={classes.displayName}>{display_name}</h4>
                <div className={classes.userInfo}>
                    <h5 className={classes.username}>@{username}</h5>
                    {
                        is_verified ?
                            <img src={verifiedIcon} alt="" className={classes.icon}/>
                            :
                            null
                    }
                </div>
            </div>

        </div>
    )
};

export default User;