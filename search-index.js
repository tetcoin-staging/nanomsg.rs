var searchIndex = {};
searchIndex['nanomsg'] = {"items":[[0,"","nanomsg",""],[1,"Socket","","A type-safe socket wrapper around nanomsg's own socket implementation. This\nprovides a safe interface for dealing with initializing the sockets, sending\nand receiving messages."],[1,"PollFd","","A request for polling a socket and the poll result.\nTo create the request, see `Socket::new_pollfd`.\nTo get the result, see `PollFd::can_read` and `PollFd::can_write`."],[1,"PollRequest","","A request for polling a set of sockets and the poll results.\nTo create the request, see `PollRequest::new`."],[2,"Protocol","","Type-safe protocols that Nanomsg uses. Each socket\nis bound to a single protocol that has specific behaviour\n(such as only being able to receive messages and not send 'em)."],[12,"Req","","Used to implement the client application that sends requests and receives replies.",0],[12,"Rep","","Used to implement the stateless worker that receives requests and sends replies.",0],[12,"Push","","This socket is used to send messages to a cluster of load-balanced nodes.\nReceive operation is not implemented on this socket type.",0],[12,"Pull","","This socket is used to receive a message from a cluster of nodes.\nSend operation is not implemented on this socket type.",0],[12,"Pair","","Socket for communication with exactly one peer.\nEach party can send messages at any time. \nIf the peer is not available or send buffer is full subsequent calls to `write`\nwill block until it’s possible to send the message.",0],[12,"Bus","","Sent messages are distributed to all nodes in the topology.\nIncoming messages from all other nodes in the topology are fair-queued in the socket.",0],[12,"Pub","","This socket is used to distribute messages to multiple destinations.\nReceive operation is not defined.",0],[12,"Sub","","Receives messages from the publisher.\nOnly messages that the socket is subscribed to are received.\nWhen the socket is created there are no subscriptions and thus no messages will be received.\nSend operation is not defined on this socket.",0],[12,"Surveyor","","Used to send the survey.\nThe survey is delivered to all the connected respondents.\nOnce the query is sent, the socket can be used to receive the responses.\nWhen the survey deadline expires, receive will return Timeout error.\n \n**See also:** `Socket::set_survey_deadline`",0],[12,"Respondent","","Use to respond to the survey.\nSurvey is received using receive function, response is sent using send function\nThis socket can be connected to at most one peer.",0],[0,"result","",""],[1,"NanoError","nanomsg::result",""],[11,"description","","",1],[11,"kind","","",1],[2,"NanoErrorKind","",""],[12,"Unknown","","",2],[12,"OperationNotSupported","","",2],[12,"ProtocolNotSupported","","",2],[12,"NoBufferSpace","","",2],[12,"NetworkDown","","",2],[12,"AddressInUse","","",2],[12,"AddressNotAvailable","","",2],[12,"ConnectionRefused","","",2],[12,"OperationNowInProgress","","",2],[12,"NotSocket","","",2],[12,"AddressFamilyNotSupported","","",2],[12,"WrongProtocol","","",2],[12,"TryAgain","","",2],[12,"BadFileDescriptor","","",2],[12,"InvalidArgument","","",2],[12,"TooManyOpenFiles","","",2],[12,"BadAddress","","",2],[12,"PermisionDenied","","",2],[12,"NetworkReset","","",2],[12,"NetworkUnreachable","","",2],[12,"HostUnreachable","","",2],[12,"NotConnected","","",2],[12,"MessageTooLong","","",2],[12,"Timeout","","",2],[12,"ConnectionAbort","","",2],[12,"ConnectionReset","","",2],[12,"ProtocolNotAvailable","","",2],[12,"AlreadyConnected","","",2],[12,"SocketTypeNotSupported","","",2],[12,"Terminating","","",2],[12,"NameTooLong","","",2],[12,"NoDevice","","",2],[12,"FileStateMismatch","","",2],[12,"Interrupted","","",2],[3,"last_nano_error","",""],[4,"NanoResult","",""],[10,"from_i64","","",2],[10,"from_u64","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"clone","","",2],[10,"fmt","","",2],[10,"eq","","",1],[10,"ne","","",1],[10,"new","","",1],[10,"from_nn_errno","","",1],[10,"to_ioerror","","",1],[10,"from_error","","",1],[10,"fmt","","",1],[0,"endpoint","nanomsg",""],[1,"Endpoint","nanomsg::endpoint","An endpoint created for a specific socket. Each endpoint is identified\nby a unique return value that can be further passed to a shutdown\nfunction. The shutdown is done through the endpoint itself and not the Socket"],[10,"new","","",3],[10,"shutdown","","Removes an endpoint from the socket that created it (via `bind` or `connect`).\nThe call will return immediately, however, \nthe library will try to deliver any outstanding outbound messages to the endpoint \nfor the time specified by `Socket::set_linger`.",3],[10,"eq","nanomsg","",0],[10,"ne","","",0],[10,"fmt","","",0],[10,"can_read","","Checks whether at least one message can be received from the socket without blocking.",4],[10,"can_write","","Checks whether at least one message can be sent to the fd socket without blocking.",4],[10,"new","","Creates a request from the specified individualsocket requests.",5],[10,"get_fds","","Returs a reference to the socket requests, so they can be checked.",5],[10,"new","","Allocate and initialize a new Nanomsg socket which returns\na new file descriptor behind the scene. The safe interface doesn't\nexpose any of the underlying file descriptors and such.",6],[10,"new_for_device","","Allocate and initialize a new Nanomsg socket meant to be used in a device",6],[10,"bind","","Creating a new socket through `Socket::new` does **not**\nbind that socket to a listening state. Instead, one has to be\nexplicit in enabling the socket to listen onto a specific address.",6],[10,"connect","","Connects the socket to a remote endpoint.\nReturns the endpoint on success.",6],[10,"nb_read","","Non-blocking version of the `read` function.\nReturns the number of read bytes on success.\nAny bytes exceeding the length specified by `buf.len()` will be truncated.\nAn error with the `NanoErrorKind::TryAgain` kind is returned if there's no message to receive for the moment.",6],[10,"nb_read_to_end","","Non-blocking version of the `read_to_end` function.\nReturns a message allocated by nanomsg on success.\nAn error with the `NanoErrorKind::TryAgain` kind is returned if there's no message to receive for the moment.",6],[10,"nb_write","","Non-blocking version of the `write` function.\nAn error with the `NanoErrorKind::TryAgain` kind is returned if the message cannot be sent at the moment.",6],[10,"new_pollfd","","Creates a poll request for the socket with the specified check criteria.\n- **pollin:** Check whether at least one message can be received from the socket without blocking.\n- **pollout:** Check whether at least one message can be sent to the fd socket without blocking.",6],[10,"poll","","Checks a set of sockets and reports whether it’s possible to send a message to the socket and/or receive a message from each socket.\nUpon successful completion, the number of `PollFd` structures with events signaled is returned. \n \n# Example",6],[10,"device","","Starts a device to forward messages between two sockets.\nIf both sockets are valid, `device` function loops\nand sends and messages received from s1 to s2 and vice versa.\nIf only one socket is valid and the other is negative,\n`device` works in a \"loopback\" mode — \nit loops and sends any messages received from the socket back to itself.\nTo break the loop and make `device` function exit use `terminate` function.",6],[10,"terminate","","Notify all sockets about process termination.\nTo help with shutdown of multi-threaded programs nanomsg provides the `terminate` function \nwhich informs all the open sockets that process termination is underway.\nIf a socket is blocked inside a blocking function, such as `read`,\nit will be unblocked and `Terminating` error will be returned to the user. \nSimilarly, any subsequent attempt to invoke a socket function other than `drop` after `terminate` was called will result in `Terminating` error.\nIf waiting inside a polling function, the call will unblock with both read and write signaled.\nThe `terminate` function itself is non-blocking.",6],[10,"set_linger","","Specifies how long the socket should try to send pending outbound messages after `drop` have been called.\nNegative value means infinite linger. Default value is 1 second.",6],[10,"set_send_buffer_size","","Size of the send buffer, in bytes. To prevent blocking for messages larger than the buffer,\nexactly one message may be buffered in addition to the data in the send buffer.\nDefault value is 128kB.",6],[10,"set_receive_buffer_size","","Size of the receive buffer, in bytes. To prevent blocking for messages larger than the buffer,\nexactly one message may be buffered in addition to the data in the receive buffer.\nDefault value is 128kB.",6],[10,"set_send_timeout","","The timeout for send operation on the socket.\nIf message cannot be sent within the specified timeout, TryAgain error is returned.\nNegative value means infinite timeout. Default value is infinite timeout.",6],[10,"set_receive_timeout","","The timeout for recv operation on the socket.\nIf message cannot be received within the specified timeout, TryAgain error is returned.\nNegative value means infinite timeout. Default value is infinite timeout.",6],[10,"set_reconnect_interval","","For connection-based transports such as TCP, this option specifies how long to wait,\nwhen connection is broken before trying to re-establish it.\nNote that actual reconnect interval may be randomised to some extent to prevent severe reconnection storms.\nDefault value is 100 milliseconds.",6],[10,"set_max_reconnect_interval","","This option is to be used only in addition to `set_reconnect_interval` option.\nIt specifies maximum reconnection interval. On each reconnect attempt,\nthe previous interval is doubled until `max_reconnect_interval` is reached.\nValue of zero means that no exponential backoff is performed and\nreconnect interval is based only on `reconnect_interval`.\nIf `max_reconnect_interval` is less than `reconnect_interval`, it is ignored.\nDefault value is 0.",6],[10,"set_send_priority","","Sets outbound priority for endpoints subsequently added to the socket.\nThis option has no effect on socket types that send messages to all the peers.\nHowever, if the socket type sends each message to a single peer (or a limited set of peers),\npeers with high priority take precedence over peers with low priority.\nHighest priority is 1, lowest priority is 16. Default value is 8.",6],[10,"set_receive_priority","","Sets inbound priority for endpoints subsequently added to the socket.\nThis option has no effect on socket types that are not able to receive messages.\nWhen receiving a message, messages from peer with higher priority are received before messages\nfrom peer with lower priority. \nHighest priority is 1, lowest priority is 16. Default value is 8.",6],[10,"set_ipv4_only","","If set to true, only IPv4 addresses are used.\nIf set to false, both IPv4 and IPv6 addresses are used.\nDefault value is true.",6],[10,"set_socket_name","","Socket name for error reporting and statistics.\nDefault value is \"socket.N\" where N is socket integer.\n**This option is experimental, see `Socket::env` for details**",6],[10,"set_tcp_nodelay","","This option, when set to `true`, disables Nagle’s algorithm.\nIt also disables delaying of TCP acknowledgments.\nUsing this option improves latency at the expense of throughput.",6],[10,"subscribe","","Defined on full `Sub` socket.\nSubscribes for a particular topic.\nType of the option is string.\nA single `Sub` socket can handle multiple subscriptions.",6],[10,"unsubscribe","","Defined on full `Sub` socket. Unsubscribes from a particular topic.",6],[10,"set_survey_deadline","","Specifies how long to wait for responses to the survey.\nOnce the deadline expires, receive function will return `Timeout` error and all subsequent responses to the survey will be silently dropped.\nThe deadline is measured in milliseconds. Default value is 1 second.",6],[10,"set_request_resend_interval","","This option is defined on the full `Req` socket.\nIf reply is not received in specified amount of milliseconds, the request will be automatically resent.\nThe type of this option is int. Default value is 1 minute.",6],[10,"read","","Receive a message from the socket and store it in the buf argument.\nAny bytes exceeding the length specified by `buf.len()` will be truncated.\nReturns the number of bytes in the message on success.",6],[10,"read_to_end","","Receive a message from the socket. Returns a message allocated by nanomsg on success.",6],[10,"read_at_least","","Reads at least `min` bytes and places them in `buf`.\nReturns the number of bytes read.",6],[10,"write","","The function will send a message containing the data from the buf parameter to the socket.\nWhich of the peers the message will be sent to is determined by the particular socket type.",6],[10,"drop","","Closes the socket.\nAny buffered inbound messages that were not yet received by the application will be discarded.\nThe library will try to deliver any outstanding outbound messages for the time specified by `set_linger`. \nThe call will block in the meantime.",6]],"paths":[[2,"Protocol"],[1,"NanoError"],[2,"NanoErrorKind"],[1,"Endpoint"],[1,"PollFd"],[1,"PollRequest"],[1,"Socket"]]};
searchIndex['libnanomsg'] = {"items":[[0,"","libnanomsg",""],[1,"nn_pollfd","",""],[3,"nn_socket","","\"Creates an SP socket with specified domain and protocol. Returns\na file descriptor for the newly created socket.\""],[3,"nn_close","","\"Closes the socket s. Any buffered inbound messages that were not yet received\nby the application will be discarded. The library will try to deliver\nany outstanding outbound messages for the time specified by NN_LINGER socket\noption. The call will block in the meantime.\""],[3,"nn_setsockopt","","\"Sets the value of the option. The level argument specifies the protocol level\nat which the option resides. For generic socket-level options use NN_SOL_SOCKET\nlevel. For socket-type-specific options use socket type for level argument\n(e.g. NN_SUB). For transport-specific options use ID of the transport as\nthe level argument (e.g. NN_TCP)."],[3,"nn_getsockopt","","\"Retrieves the value for the option. The level argument specifies the protocol\nlevel at which the option resides. For generic socket-level options use NN_SOL_SOCKET\nlevel. For socket-type-specific options use socket type for level argument\n(e.g. NN_SUB). For transport-specific options use ID of the transport as the\nlevel argument (e.g. NN_TCP)."],[3,"nn_bind","","\"Adds a local endpoint to the socket s. The endpoint can be then used by other\napplications to connect to. The addr argument consists of two parts as follows:\ntransport://address. The transport specifies the underlying transport protocol\nto use. The meaning of the address part is specific to the underlying transport\nprotocol.\""],[3,"nn_connect","","\"Adds a remote endpoint to the socket s. The library would then try to connect to the\nspecified remote endpoint. The addr argument consists of two parts as follows:\ntransport://address. The transport specifies the underlying transport protocol to use.\nThe meaning of the address part is specific to the underlying transport protocol.\""],[3,"nn_shutdown","","\"Removes an endpoint from socket s. how parameter specifies the ID of the endpoint to\nremove as returned by prior call to nn_bind(3) or nn_connect(3). nn_shutdown() call\nwill return immediately, however, the library will try to deliver any outstanding\noutbound messages to the endpoint for the time specified by NN_LINGER socket option.\""],[3,"nn_send","","\"The function will send a message containing the data from buffer pointed to by buf\nparameter to the socket s. The message will be len bytes long. Alternatively, to send\na buffer allocated by nn_allocmsg(3) function set the buf parameter to point to the\npointer to the buffer and len parameter to NN_MSG constant. In this case a successful\ncall to nn_send will deallocate the buffer. Trying to deallocate it afterwards will\nresult in undefined behaviour."],[3,"nn_recv","","\"Receive a message from the socket s and store it in the buffer referenced by the buf\nargument. Any bytes exceeding the length specified by the len argument will be truncated."],[3,"nn_sendmsg","","http://nanomsg.org/v0.4/nn_sendmsg.3.html"],[3,"nn_recvmsg","","http://nanomsg.org/v0.4/nn_recvmsg.3.html"],[3,"nn_allocmsg","","http://nanomsg.org/v0.4/nn_allocmsg.3.html"],[3,"nn_reallocmsg","","http://nanomsg.org/v0.4/nn_reallocmsg.3.html"],[3,"nn_freemsg","","http://nanomsg.org/v0.4/nn_freemsg.3.html"],[3,"nn_poll","","http://nanomsg.org/v0.4/nn_poll.3.html"],[3,"nn_errno","","http://nanomsg.org/v0.4/nn_errno.3.html"],[3,"nn_strerror","","http://nanomsg.org/v0.4/nn_strerror.3.html"],[3,"nn_term","","http://nanomsg.org/v0.4/nn_term.3.html"],[3,"nn_device","","http://nanomsg.org/v0.4/nn_device.3.html"],[18,"NN_HAUSNUMERO","",""],[18,"EACCESS","",""],[18,"AF_SP","",""],[18,"AF_SP_RAW","",""],[18,"NN_PROTO_PIPELINE","",""],[18,"NN_PUSH","",""],[18,"NN_PULL","",""],[18,"NN_MSG","",""],[18,"NN_PROTO_REQREP","",""],[18,"NN_REQ","",""],[18,"NN_REP","",""],[18,"NN_REQ_RESEND_IVL","",""],[18,"NN_PROTO_PAIR","",""],[18,"NN_PAIR","",""],[18,"NN_PROTO_BUS","",""],[18,"NN_BUS","",""],[18,"NN_PROTO_PUBSUB","",""],[18,"NN_PUB","",""],[18,"NN_SUB","",""],[18,"NN_SUB_SUBSCRIBE","",""],[18,"NN_SUB_UNSUBSCRIBE","",""],[18,"NN_PROTO_SURVEY","",""],[18,"NN_SURVEYOR","",""],[18,"NN_RESPONDENT","",""],[18,"NN_SURVEYOR_DEADLINE","",""],[18,"NN_SOCKADDR_MAX","",""],[18,"NN_SOL_SOCKET","",""],[18,"NN_LINGER","",""],[18,"NN_SNDBUF","",""],[18,"NN_RCVBUF","",""],[18,"NN_SNDTIMEO","",""],[18,"NN_RCVTIMEO","",""],[18,"NN_RECONNECT_IVL","",""],[18,"NN_RECONNECT_IVL_MAX","",""],[18,"NN_SNDPRIO","",""],[18,"NN_RCVPRIO","",""],[18,"NN_SNDFD","",""],[18,"NN_RCVFD","",""],[18,"NN_DOMAIN","",""],[18,"NN_PROTOCOL","",""],[18,"NN_IPV4ONLY","",""],[18,"NN_SOCKET_NAME","",""],[18,"NN_DONTWAIT","",""],[18,"NN_TCP","",""],[18,"NN_TCP_NODELAY","",""],[18,"NN_POLLIN","",""],[18,"NN_POLLOUT","",""],[18,"NN_POLL_IN_AND_OUT","",""],[18,"ETERM","",""],[18,"EFSM","",""],[10,"new","","",0],[10,"pollin_result","","",0],[10,"pollout_result","","",0]],"paths":[[1,"nn_pollfd"]]};

searchIndex['link-config'] = {"items":[[0,"","link-config",""],[3,"plugin_registrar","",""]],"paths":[]};

initSearch(searchIndex);