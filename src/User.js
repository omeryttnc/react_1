const User = ({ username, twit }) => {
    return (
        <div>
            <h2>{username} </h2>
            <p>{twit}</p>
        </div>
    )

}

export default User