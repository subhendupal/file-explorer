import { useState } from "react"
import { FileComp } from "./FileComp";

export const FolderComp = ({ data }) => {

    const [expanded, setExpanded] = useState(false);

    const handleAdd = (e) => {
        e.stopPropagation()
    }

    const handleDelete = (e) => {
        e.stopPropagation()
    }

    const handleUpdate = (e) => {
        e.stopPropagation()
    }

    return <div style={{ marginTop: "10px", marginLeft: "25px" }}>
        {data.isFolder ? <>
            <div className="folder" onClick={(e) => {
                e.stopPropagation()
                setExpanded(prev => !prev)
            }}>
                <span>{`${expanded ? "📁" : "📂"} ${data.name}`}</span>
                <div>
                    <button style={{ marginRight: "5px", cursor: "pointer" }} onClick={(e) => handleAdd(e)}>{`📁+`}</button>
                    <button style={{ marginRight: "5px", cursor: "pointer" }} onClick={(e) => handleAdd(e)}>{`📄+`}</button>
                    <button style={{ marginRight: "5px", cursor: "pointer" }} onClick={(e) => handleUpdate(e)}>{`✏️`}</button>
                    <button style={{ marginRight: "5px", cursor: "pointer" }} onClick={(e) => handleDelete(e)}>{`🗑️`}</button>
                </div>
            </div>
            <div style={{ display: expanded ? "block" : "none" }}>
                {data.items.map((item) => <FolderComp key={data.id} data={item} />)}
            </div>
        </> : <FileComp data={data} />}
    </div>
}