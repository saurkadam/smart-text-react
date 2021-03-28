import React, { useState } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { withRouter } from "react-router-dom";

const Home = (props) => {
    const { history } = props
    const [contentValue, setContentValue] = useState([{ name: 'lorem ipsum', type: 'pdf', length: '2' }, { name: 'absbsbbs', type: 'pdf', length: '2' }])
    const [searchResults, setSearchResults] = useState([{name:'abc', description:'laslaldladsl'}])
    const click = (value) => {
        history.push({
            pathname:'/case',
            state: value.currentTarget.innerText
        })
    }
    const getResult = (value) => {

    }
    return (
        <div className='Home'>
            <section id={'section1'}>
                <Jumbotron backPageText='admin' adminLink='' searchCallBack={(value) => {getResult(value)}}  searchText='' caseFile='' searchTextLabel='Search All Document' />
                <Accordion
                    PanelComponent={[{ name: 'Documents', class: 'text-left document-coloumn padding-left' }, { name: 'Type', class: 'text-center' }, { name: 'Length', class: 'text-center' }]}
                    showTable={true}
                    showExpanded={true}
                    contentData={contentValue}
                    sortOrder={(evt) => { console.log(evt.currentTarget.id) }}
                    dataTransfer={(value) => { click(value) }}
                    ></Accordion>
            </section>
            <section id={'section2'} className='container'>
                {searchResults.length > 0 && (
                    <>
                        <div className='app-flex app-flex-row justify-content-space-between  align-items-center '>
                            <h2>Search Results</h2>
                            <AnchorLink href='#section1'>Back to top</AnchorLink>
                        </div>
                        <div>
                            {searchResults.map((item, index) => {
                                return <Card SearchResult={item} key={index} />
                            })}
                        </div>
                    </>
                )
                }
            </section>

        </div>
    )
}
export default withRouter(Home)