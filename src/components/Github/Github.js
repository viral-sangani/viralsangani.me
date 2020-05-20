import React from 'react'
import Section from './Section'
import ReposStyle from './ReposStyle'
import FlipMove from 'react-flip-move'
import Octicon, {
    Repo,
    Star,
    RepoForked,
    LogoGithub,
} from '@primer/octicons-react'
import { StaticQuery, graphql } from 'gatsby'
import { langColors } from './extra'

const Github = () => {
    return (
        <StaticQuery
            query={graphql`
                query Repodata {
                    allRestApiUsersViralSanganiRepos(
                        sort: { fields: updated_at, order: DESC }
                        limit: 6
                    ) {
                        edges {
                            node {
                                id
                                html_url
                                name
                                language
                                stargazers_count
                                forks
                                size
                                description
                            }
                        }
                    }
                }
            `}
            render={(data) => {
                const topRepos = data.allRestApiUsersViralSanganiRepos.edges
                return (
                    <Section>
                        <ReposStyle>
                            <header>
                                <h2>
                                    Top Repos straight from{' '}
                                    <span>
                                        <Octicon
                                            size="medium"
                                            verticalAlign="middle"
                                            icon={LogoGithub}
                                        />
                                    </span>
                                </h2>
                            </header>
                            <div className="repo-list">
                                {topRepos.length > 0 ? (
                                    <FlipMove typeName="ul">
                                        {topRepos.map(({ node }) => (
                                            <li key={node.id}>
                                                <a
                                                    href={node.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="repo"
                                                >
                                                    <div className="repo__top">
                                                        <div className="repo__name">
                                                            <Octicon
                                                                icon={Repo}
                                                            />
                                                            <h3>{node.name}</h3>
                                                        </div>
                                                        <p
                                                            style={{
                                                                color: 'black',
                                                            }}
                                                        >
                                                            {node.description}
                                                        </p>
                                                    </div>
                                                    <div className="repo__stats">
                                                        <div className="repo__stats--left">
                                                            <span>
                                                                <div
                                                                    className="language"
                                                                    style={{
                                                                        backgroundColor:
                                                                            langColors[
                                                                                node
                                                                                    .language
                                                                            ],
                                                                    }}
                                                                />
                                                                {node.language}
                                                            </span>
                                                            <span>
                                                                <Octicon
                                                                    icon={Star}
                                                                />
                                                                {node.stargazers_count.toLocaleString()}
                                                            </span>
                                                            <span>
                                                                <Octicon
                                                                    icon={
                                                                        RepoForked
                                                                    }
                                                                />
                                                                {node.forks.toLocaleString()}
                                                            </span>
                                                        </div>
                                                        <div className="repo__stats--right">
                                                            <span>
                                                                {node.size.toLocaleString()}{' '}
                                                                KB
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </FlipMove>
                                ) : (
                                    <p>No available repositories!</p>
                                )}
                            </div>
                        </ReposStyle>
                    </Section>
                )
            }}
        />
    )
}

export default Github
