export default async function Meeting ({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const slug = (await params).id
    return <div>Meeting Room : {slug}</div>
  }