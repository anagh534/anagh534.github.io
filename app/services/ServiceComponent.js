export default function ServiceComponent({image,description,title,alt=""}) {
    return (
        <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
                <img className="postcard__img"   src={image} alt={alt} />
            </a>
            <div className="postcard__text">
                <h2 className="postcard__title blue">{title}</h2>
                <div className="postcard__subtitle small">
                    {/* <time datetime="2020-05-25 12:00:00">
                        <i className="fas fa-calendar-alt mr-2"></i> Mon, May 25th 2020
                    </time> */}
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                    {description}
                </div>

            </div>
        </article>
    )
}