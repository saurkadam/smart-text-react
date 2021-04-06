import React, { useState } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {
    const { history } = props
    const [contentValue, setContentValue] = useState([{ name: 'lorem ipsum',sentiment:'-10', type: 'pdf', length: '2' }, { name: 'absbsbbs',sentiment:'-5', type: 'pdf', length: '2' }])
    const [searchResults, setSearchResults] = useState([{name:'abc', description:'laslaldladsl'}])
    const click = (value) => {
        history.push({
            pathname:'/case',
            state: value.currentTarget.innerText
        })
    }
    const getResult = (value) => {
            
        axios.get('http://courtsmarttextsemanticsearch.northeurope.azurecontainer.io:5000/cognitive-insights/semantic-search').then((response) => {
            setSearchResults(response.data)
        }).catch((e) => {
            console.log(e, "error in getting required text")
        })
    }   
    return (
        <div className='Home'>
            <section id={'section1'}>
                <Jumbotron backPageText='admin' placeHolderText="This may take time" adminLink='' searchCallBack={(value) => {getResult(value)}}   caseFile='' searchTextLabel='Search All Document' />
                <Accordion
                    PanelComponent={[{ name: 'Documents', class: 'text-left document-coloumn padding-left' },{ name: 'Sentiment', class: 'text-center' }, { name: 'Type', class: 'text-center' }, { name: 'Length', class: 'text-center' }]}
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
                                return <Card key={index} padding={{padding:"1rem"}}>
                                    <>            
                                        <Link 
                                            to={{
                                                pathname:'/case',
                                                state: item.name
                                            }}
                                            style={{
                                                fontSize:'25px'
                                            }}>{item.name}</Link>
                                            <p>{item.description}</p>
                                    </>
                                </Card>
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