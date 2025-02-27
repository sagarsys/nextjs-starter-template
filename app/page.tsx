import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="grid">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button variant="outline">Click me</Button>
        </div>
    );
}
