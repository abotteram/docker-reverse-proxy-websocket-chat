import {
    ConnectedSocket, MessageBody, OnGatewayConnection,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage( 'chat-message' )
    handleMessage(
        @MessageBody() msg: string,
        @ConnectedSocket() socket: Socket,
    ) {
        return this.server.in( 'chat' ).emit( 'chat-message', msg );
    }

    handleConnection( client: Socket ): any {
        client.join( 'chat' );
    }
}
