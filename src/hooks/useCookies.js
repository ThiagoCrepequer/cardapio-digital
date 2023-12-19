import Cookies from "js-cookie";

export function useCookies() {
    return {
        id: getId(),
        setId: setId
    }
}

function getId() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    
    const id = params.get("id");
    const cookieId = Cookies.get("id");

    if(!id && cookieId) {
        return cookieId;
    }

    Cookies.set("id", id);
    return id;
}

function setId(responseToken) {
    const token = responseToken.replace("Bearer ", "");
    Cookies.set("token", token);
}
