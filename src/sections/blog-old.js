/** @jsx jsx */
import Head from "next/head";
import {getAllPosts} from "../lib/posts";
import { jsx, Container, Flex, Button } from 'theme-ui';
import { FaCentercode } from "react-icons/fa";

export default function Blog() {
    const posts = getAllPosts();
    return (
      <section id = "blog">        
          <Container style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Head>
                <title>Cooking with Tuomo</title>
            </Head>
            <div>
                <h1>Cooking w/ Tuomo</h1>
            </div>
           </Container>
           <Container style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div>
                {posts.map((p) => (
                    <BlogPostPreview key={p.id} data = {p} />
                ))}
            </div>
        </Container>
        
        </section>

    );
}

    const BlogPostPreview = (props) => {
        const {data} = props;
        return (
            <Container >
            <div style={{ maxWidth: "400px" }}>
                <img 
                    src={data.coverImage}
                    alt={data.title}
                    style={{ width: "100%" }}
                />
                <h2 style={{textAlign: "center"}}>{data.title}</h2>
                <div>{data.publishDate}</div>
                <p>{data.excerpt}</p>
                <div style={{fontWeight: "bold" }}>{data.author}</div>
            </div>
            </Container>
        );
    };
