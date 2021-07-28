CREATE TABLE blog (
    id serial PRIMARY KEY,
    blog_name text,
    blog_description text,
    blog_author text,
    slug text
);

CREATE TABLE posts (
    id serial PRIMARY KEY,
    post_name text NOT NULL,
    post_content text NOT NULL,
    slug text,
    blog_id integer REFERENCES blog(id) 
);