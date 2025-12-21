// app/blog/[id]/page.tsx
type Props = {
  params: {
    id: string;
  };
};

export default function BlogPost({ params }: Props) {
  return (
    <div>
      <h1>Blog Post: {params.id}</h1>
      <p>This would be the content for blog post {params.id}</p>
    </div>
  );
}

// Access via: /blog/1, /blog/my-first-post, etc.
