import { useState } from "react"
import { FolderComp } from "./FolderComp"
import { initialFolderData } from "../data/initialFolderData"

export const Explorer = () => {

    const [explorerData, setExplorerData] = useState(initialFolderData)
    return <>
        <FolderComp data={explorerData} />
    </>
}