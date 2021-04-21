import React from "react";
import { render, cleanup, findAllByText } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { blogPostsQuery } from "../../queries/blogPostsQuery";

import Blog from "../BlogPostsPage";

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: blogPostsQuery,
    },
    result: {
      data: {
        blogPostCollection: {
          items: [
            {
              uId: "first",
              headline: "Hi there!",
              headlineImage: {
                description: "Just for testing",
                url:
                  "https://images.ctfassets.net/hp65n3cv65kf/5avoDyGbObT6D58JXW5HiQ/f11ca1f52c633a94c70196789b9f76ec/DSC00256.JPG",
              },
              blogPostContent: {
                json: {
                  nodeType: "document",
                  data: {},
                  content: [
                    {
                      nodeType: "paragraph",
                      content: [
                        {
                          nodeType: "text",
                          value:
                            "This is my first Blog Post. I am writing this on a weird snowy April day, overlooking houses from the middle of Berlin. Nothing interesting happened today. But hey, tomorrow is already waiting!",
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                },
              },
              publishDate: "2021-04-07T00:00:00.000Z",
            },
          ],
        },
      },
    },
  },
];

describe("BlogPost", () => {
  afterEach(cleanup);

  it("should render blog title", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Blog />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 300));

    const titleElement = await findAllByText(container, "Hi there!");

    expect(titleElement).toBeTruthy();
  });
});
