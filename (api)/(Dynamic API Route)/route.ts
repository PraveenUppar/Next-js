type Props = {
  params: {
    id: string;
  };
};
export async function GET(req: Request, { params }: Props) {
  const { id } = params;
  return Response.json({
    id,
    title: `Post ${id}`,
    content: `This is the content of post ${id}`,
  });
}

export async function DELRTE(req: Request, { params }: Props) {
  const { id } = params;
  return Response.json({
    success: true,
    message: `Post ${id} deleted`,
  });
}
