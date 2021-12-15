const Comment = ({ children }) => {
    return (
        <p className="comment">
            &#47;&#42; <span>{children}</span> &#42;&#47;
        </p>
    )
}

export default Comment