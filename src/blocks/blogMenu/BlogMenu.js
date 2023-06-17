import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import LinkButton from '../../components/button/LinkButton';
import BlogMenuData from '../../data/blog/blogMenu.json';
import BlogItemData from '../../data/blog/blogItems.json';
import BlogCell from "./BlogCell"

class BlogMenu extends Component {
    constructor( props ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );

        this.state = {
            selected: 0,
            list: BlogMenuData
        };
    }

    handleClick( i, e ) {
        e.preventDefault();

        this.setState( {
            selected: i
        } );

        return false
    }

    onFilterChange = ( newFilter ) => {
        const blogTable_items_name = this.grid;
        const blogTable_item_name  = '.blogTable-item';

        if ( this.iso === undefined ) {
            this.iso = new Isotope( blogTable_items_name, {
                itemSelector: blogTable_item_name,
                masonry: {
                    horizontalOrder: true
                }
            } );
        }

        if ( newFilter === '*' ) {
            this.iso.arrange( { filter: `*` } );

        } else {
            this.iso.arrange( { filter: `.${ newFilter }` } );
        }
    };

    componentDidMount() {
    }

    render() {
        const listCount = this.state.list.length - 1;

        return (
            <div className="blogTable spacer p-bottom-lg">
                <h5> Coming Soon. </h5>
                 {/* <div className="blogTable-wrapper">
                    <h3>Blogs</h3>
                    <ul className="blogTable-filter">
                        { this.state.list.map( ( item, key ) => (   
                            <React.Fragment key={ key }>
                                <li>
                                    <span title={ item.title }
                                       className={ "btn btn-link transform-scale-h click" + ( key === this.state.selected ? ' active' : '' ) }
                                       data-filter={ item.filter }
                                       onClick={ ( event ) => {
                                           this.onFilterChange( item.filter );
                                           this.handleClick( key, event )
                                       } }>
                                        {item.title}
                                    </span>
                                </li>

                                { key !== listCount ?
                                    <li>
                                        <span className="btn btn-link">-</span>
                                    </li>
                                    : ""
                                }
                            </React.Fragment>
                        ) ) }
                    </ul>
                <div className={"blogTable-item-wrapper"} >
                    <div className="blogTable-items" ref={ ( c ) => this.grid = c }>
                        { BlogItemData && BlogItemData.map( ( item, key ) => {
                            if (item.material === ""){
                                return (
                                    <BlogCell
                                        item = {item}
                                        key = {key}
                                    />
                                );
                            } else {
                                return (
                                    <BlogCell
                                        item = {item}
                                        key = {key}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
                </div> */}
            </div>
        );
    }
}

export default BlogMenu;