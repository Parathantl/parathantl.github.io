import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Tamilsources = () => (
    <StaticQuery
        query={graphql`
            query TamilResourcesQuery{
                allTamilResourcesJson{
                    edges{
                        node{
                            id
                            title
                            link
                        }
                    }
                }
            }
        `}
        render={data => (
            <div style={{marginLeft: 50, marginTop: 20}}>
                <p><a href='/'>Home</a></p>
                <h2>Tamil YouTube Channel Resources on Programming</h2>
                <ul>{getData(data)}</ul>
            <Bio />
            </div>
        )}
    />
)

function getData(data) {
    const tamilData = []
    data.allTamilResourcesJson.edges.map(({ node }) => (
        tamilData.push(<li key={node.id}>
            <p><a target={'_blank'} href={node.link}>{node.title}</a></p>
        </li>)
    ))
    return tamilData;
}

export default Tamilsources;