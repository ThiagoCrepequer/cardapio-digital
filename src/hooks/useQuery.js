export function useQuery() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    
    const id = params.get("id");
    const localId = localStorage.getItem("id");

    if(!id && localId) {
        return { id: localId };
    }

    localStorage.setItem("id", id);
    return { id };
}