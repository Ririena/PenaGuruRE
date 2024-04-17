import { Skeleton, Card } from "@nextui-org/react";

export default function Loading() {
    return (
        <>
            <main>
                <section>
                    <Skeleton>
                        <Card className="max-w-[300px] w-full">
                            <div className="max-w-[200px] w-full"></div>
                            <div className="max-w-[200px] w-full"></div>
                        </Card>
                    </Skeleton>
                </section>
            </main>
        </>
    );
}
