import React, { Component } from 'react';
import Isotope from 'isotope-layout';

import ResearchTalkMenuData from '../../data/researchTalk/researchTalkMenu.json';
import ResearchTalkItemData from '../../data/researchTalk/researchTalkItems.json';

class ResearchTalkList extends Component {
    constructor( props ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );

        this.state = {
            selected: 0,
            list: ResearchTalkMenuData,
            overlayItem: null
        };
    }

    handleClick( i, e ) {
        e.preventDefault();

        this.setState( {
            selected: i
        } );

        return false;
    }

    onFilterChange = ( newFilter ) => {
        const researchTalk_items_name = this.grid;
        const researchTalk_item_name  = '.researchTalk-item';

        if ( this.iso === undefined ) {
            this.iso = new Isotope( researchTalk_items_name, {
                itemSelector: researchTalk_item_name,
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
        this.onFilterChange( '*' );
    }

    openOverlay( item ) {
        this.setState( {
            overlayItem: item
        } );
    }

    closeOverlay() {
        this.setState( {
            overlayItem: null
        } );
    }

    getCategoryTitle( categoryFilter ) {
        const category = ResearchTalkMenuData.filter( ( { filter } ) => filter === categoryFilter )[0];

        return category ? category.title : '#' + categoryFilter;
    }

    render() {
        const listCount = this.state.list.length - 1;

        return (
            <div className="researchTalk spacer p-top-md p-bottom-lg">
                <h4>Talk List</h4>
                <ul className="researchTalk-filter">
                    { this.state.list.map( ( item, key ) => (
                        <React.Fragment key={ key }>
                            <li>
                                <span title={ item.title }
                                   className={ "btn btn-link transform-scale-h click" + ( key === this.state.selected ? ' active' : '' ) }
                                   data-filter={ item.filter }
                                   onClick={ ( event ) => {
                                       this.onFilterChange( item.filter );
                                       this.handleClick( key, event );
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

                <div className="researchTalk-item-wrapper">
                    <div className="researchTalk-items" ref={ ( c ) => this.grid = c }>
                        { ResearchTalkItemData && ResearchTalkItemData.map( ( item, key ) => (
                            <article
                                key={ key }
                                title={ item.title }
                                className={ "researchTalk-item active " + item.category }
                                onClick={ () => this.openOverlay( item ) }>
                                <div className="researchTalk-image">
                                    <img src={ process.env.PUBLIC_URL + item.image } alt={ item.title } />
                                </div>
                                <div className="researchTalk-info">
                                    <h6>{ item.title }</h6>
                                    { item.speaker ?
                                        <p className="researchTalk-speaker">
                                            { item.speakerUrl ?
                                                <a href={ item.speakerUrl } onClick={ ( event ) => event.stopPropagation() }>{ item.speaker }</a>
                                                : <b>{ item.speaker }</b>
                                            }
                                        </p>
                                        : ""
                                    }
                                    <p className="researchTalk-date">{ item.date }</p>
                                    <p>
                                        { item.category.split( ' ' ).map( ( tag ) => (
                                            <i key={ tag }>{ this.getCategoryTitle( tag ) }&ensp;</i>
                                        ) ) }
                                    </p>
                                </div>
                            </article>
                        ) ) }
                    </div>
                </div>

                { this.state.overlayItem ?
                    <div className="researchTalk-overlay">
                        <button
                            type="button"
                            className="researchTalk-overlay-close"
                            aria-label="Close"
                            onClick={ ( event ) => {
                                event.stopPropagation();
                                this.closeOverlay();
                            } }>
                            X
                        </button>
                        <img
                            src={ process.env.PUBLIC_URL + this.state.overlayItem.image }
                            alt={ this.state.overlayItem.title }
                            onClick={ ( event ) => event.stopPropagation() } />
                    </div>
                    : ""
                }
            </div>
        );
    }
}

export default ResearchTalkList;
