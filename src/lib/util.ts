export function open_socket(loc: string): Promise<WebSocket> {
    let ws = new WebSocket(loc);
    let default_error = ws.onerror;

    return new Promise((res, rej) => {
        ws.onerror = rej;
        ws.onopen = () => {
            ws.onerror = default_error
            res(ws)
        };
    })
}