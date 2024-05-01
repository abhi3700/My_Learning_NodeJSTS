export default function Page({ params }: { params: { id: string } }) {
    return <h1>Quiz {params.id}</h1>;
}
