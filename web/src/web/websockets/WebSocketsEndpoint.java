/**
 *
 */
package web.websockets;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 * @author Cain
 *
 */
@ServerEndpoint("/echo")
public class WebSocketsEndpoint {
    private Session session;

    @OnOpen
    public void open(Session session) {
        this.session = session;

        ExecutorService executor = Executors.newFixedThreadPool(10);
        executor.submit(() -> {
            while (true) {
                this.session.getAsyncRemote().sendText("Responding ...");
                Thread.sleep(1000);
            }
        });
    }

    @OnMessage
    public void onMessage(Session session, String message) throws Exception {
        //session.getBasicRemote().sendText(message);
    }
}
