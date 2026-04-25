'use client'
import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

export default function Page() {
    return (
        <>
            <LoadingProvider>
                <Suspense>
                    <MainContainer>
                        <Suspense>
                            <CharacterModel />
                        </Suspense>
                    </MainContainer>
                </Suspense>
            </LoadingProvider>
        </>
    )
}
