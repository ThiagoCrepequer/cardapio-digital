export function useQuery() {
    return {
        id: getId(),
    }
}

function getId() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    
    const id = params.get("id");
    const localId = localStorage.getItem("id");

    if(!id && localId) {
        return localId;
    }

    localStorage.setItem("id", id);
    return id;
}