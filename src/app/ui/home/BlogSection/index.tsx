import React from "react";
import _articles from "../../../../data/data.article.json";
import { Article } from "../../../../types/Article";
import { LinkButtonImageRightLineDown } from "../../shared/LinkButton";
import Image from "next/image";
import {
  BodyBlogSection,
  ContentBlogSection,
  HeaderBlogSection,
} from "./twinStyle";
import CardArticle from "../../shared/CardArticle";

const articles = _articles as Article[];

const BlogSection = () => {
  const ArticlesList = () => {
    return articles.map((article) => (
      <li key={article.id}>
        <CardArticle {...article} />
      </li>
    ));
  };

  return (
    <BodyBlogSection>
      <HeaderBlogSection>
        <h3>Articles</h3>
        <div>
          <LinkButtonImageRightLineDown title="More Articles" href="#">
            <Image
              src="/icons/arrow/arrow-right.svg"
              width={20}
              height={20}
              alt="Icon Arrow"
            />
          </LinkButtonImageRightLineDown>
        </div>
      </HeaderBlogSection>
      <ContentBlogSection>
        <ArticlesList />
      </ContentBlogSection>
    </BodyBlogSection>
  );
};

export default BlogSection;
