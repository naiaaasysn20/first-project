import header from '../components/header';

export default function NoPage() {
    return (
        <div>
            {header()}
            <h1>Error 404: Not Found</h1>
        </div>
    )
}