import React from 'react';

const BlogCell = ({item, key}) => { 
    return (
        <section key={ key } title={ item.title } className={ "blogTable-item active " + item.category }>
                <div className="contents_div overflow-hidden">
                    <div className="object-fit-cover transform-scale-h">
                        <a href={item.url} cursor="pointer">
                            <img className="img_div" src={process.env.PUBLIC_URL + `/assets/blog/`+ item._id + `/thumbnail.png`} alt={item._id}/>
                        </a>
                    </div>
                    {/* <a href={item.url} cursor="pointer">
                        <img className="img_div transform-scale-h" src={process.env.PUBLIC_URL + `/assets/blog/`+ item._id + `/thumbnail.png`} alt={item._id}/>
                    </a> */}
                    <div className="info_div">
                        <div>
                            <h5><a href={item.url} cursor="pointer">{item.title}</a></h5>
                            <p className='desc'>{item.decs}</p>
                        </div>
                        <div className="date_div">
                            <p className="blogdate">{item.year}</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default BlogCell;
