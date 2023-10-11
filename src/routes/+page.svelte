<script lang=ts>
    import { open_socket } from "$lib/util";

    open_socket("ws://localhost:8081")
        .then(async ws => {
            ws.onmessage = (e) => console.log(e.data);
            while (true) { 
                ws.send("hello");
                await new Promise(res => setTimeout(res, 1000));
            }
        });
</script>