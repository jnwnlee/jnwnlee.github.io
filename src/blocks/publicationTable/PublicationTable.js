import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import LinkButton from '../../components/button/LinkButton';
import PublicationMenuData from '../../data/publication/publicationMenu.json';
import PublicationItemData from '../../data/publication/publicationItems.json';


class PublicationTable extends Component {
    constructor( props ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );

        this.state = {
            selected: 0,
            list: PublicationMenuData,
            showDetails: true
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
        const publicationTable_items_name = this.grid;
        const publicationTable_item_name  = '.publicationTable-item';

        if ( this.iso === undefined ) {
            this.iso = new Isotope( publicationTable_items_name, {
                itemSelector: publicationTable_item_name,
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

    getCategoryTitle (categoryFilter) {
        return PublicationMenuData.filter( ({filter})=> filter === categoryFilter )[0].title
    };

    handleDetailsToggle = ( showDetails ) => {
        this.setState( {
            showDetails: showDetails
        }, () => {
            if ( this.iso !== undefined ) {
                this.iso.layout();
            }
        } );
    };

    renderPublicationItem( item, key ) {
        const details = Array.isArray( item.details ) ? item.details : [];
        const hasMaterial = item.material && Object.keys( item.material ).length > 0;

        return (
            <div key={ key } title={ item.title } className={ "publicationTable-item active " + item.category }>
                <h6>{ item.title }</h6>
                <p>{ item.Authors.split('Junwon Lee')[0] }<b>Junwon Lee</b>{ item.Authors.split('Junwon Lee')[1] }</p>
                <p className="date">{ item.bookTitle }</p>
                <p className="publicationTable-tags">
                    { item.category.split(' ').map( tag => (
                        <i key={ tag }>{ '#'+this.getCategoryTitle( tag ) }&ensp;</i>
                    ) ) }
                </p>
                { hasMaterial &&
                    <div className="publicationTable-materials">
                        { Object.keys( item.material ).map( ( keyName, index ) => (
                            <LinkButton
                                key={ keyName }
                                keyword={ keyName }
                                link={ item.material[keyName] }
                                position={ index === 0 ? "" : "inline" }
                                textcolor="has-white-color"
                                backgroundcolor="has-gray-dark-background-color"
                            />
                        ) ) }
                    </div>
                }
                { this.state.showDetails && details.length > 0 &&
                    <ul className="publicationTable-details">
                        { details.map( ( detail, detailKey ) => (
                            <li key={ detailKey }>
                                <span className="publicationTable-detail-marker" aria-hidden="true">•</span>
                                <span>{ detail }</span>
                            </li>
                        ) ) }
                    </ul>
                }
            </div>
        );
    }

    componentDidMount() {
    }

    render() {
        const listCount = this.state.list.length - 1;

        return (
            <div className="publicationTable spacer p-bottom-lg">
                <div className="wrapper">
                    <div className="publicationTable-heading">
                        <h4>Publications</h4>
                        <button
                            type="button"
                            className="publicationTable-details-toggle btn has-text-color has-white-color has-background has-gray-dark-background-color"
                            onClick={ () => this.handleDetailsToggle( !this.state.showDetails ) }
                            aria-pressed={ this.state.showDetails }
                        >
                            { this.state.showDetails ? 'Hide details' : 'Show details' }
                        </button>
                    </div>
                    <ul className="publicationTable-filter">
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
                    <div className={"publicationTable-item-wrapper"} >
                        <div className="publicationTable-items" ref={ ( c ) => this.grid = c }>
                            { PublicationItemData && PublicationItemData.map( ( item, key ) =>
                                this.renderPublicationItem( item, key )
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PublicationTable;
