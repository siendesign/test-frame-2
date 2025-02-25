import { useEffect, useCallback, useState } from "react";
// @ts-ignore
import sdk, { type FrameContext } from "@farcaster/frame-sdk";
import Image from "next/image";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSendTransaction,
  useSignMessage,
  useSignTypedData,
  useWaitForTransactionReceipt,
} from "wagmi";
import { config } from "@/components/providers/WagmiProvider";

export default function Demo() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext>();
  const [isContextOpen, setIsContextOpen] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const { address, isConnected } = useAccount();
  const {
    sendTransaction,
    error: sendTxError,
    isError: isSendTxError,
    isPending: isSendTxPending,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: txHash as `0x${string}`,
    });

  const {
    signMessage,
    error: signError,
    isError: isSignError,
    isPending: isSignPending,
  } = useSignMessage();

  const {
    signTypedData,
    error: signTypedError,
    isError: isSignTypedError,
    isPending: isSignTypedPending,
  } = useSignTypedData();

  const { disconnect } = useDisconnect();
  const { connect } = useConnect();

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  const sendTx = useCallback(() => {
    sendTransaction(
      {
        to: "0x4bBFD120d9f352A0BEd7a014bd67913a2007a878",
        data: "0x9846cd9efc000023c0",
      },
      {
        onSuccess: (hash) => {
          setTxHash(hash);
        },
      }
    );
  }, [sendTransaction]);

  const sign = useCallback(() => {
    signMessage({ message: "Hello from Frames v2!" });
  }, [signMessage]);

  const signTyped = useCallback(() => {
    signTypedData({
      domain: {
        name: "Frames v2 Demo",
        version: "1",
        chainId: 8453,
      },
      types: {
        Message: [{ name: "content", type: "string" }],
      },
      message: {
        content: "Hello from Frames v2!",
      },
      primaryType: "Message",
    });
  }, [signTypedData]);

  const toggleContext = useCallback(() => {
    setIsContextOpen((prev) => !prev);
  }, []);

  const renderError = (error: Error | null) => {
    if (!error) return null;
    return <div className="text-red-500 text-xs mt-1">{error.message}</div>;
  };

  const openUrl = useCallback(() => {
    sdk.actions.openUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }, []);

  const close = useCallback(() => {
    sdk.actions.close();
  }, []);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto py-4 px-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-center mb-4">Frames v2 Demo</h1>
        <div className="">
          <Button variant={"outline"} onClick={close}>
            <X />
          </Button>
        </div>
      </div>

      {/* context toggle and data */}

      <div className="flex gap-2">
        {context?.user && (
          <>
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image src={context?.user && context?.user?.pfpUrl} fill alt="" />
              {/* <Image src={'https://i.imgur.com/lhClHwB.jpg'} fill alt="" objectFit="cover"/> */}
            </div>
            <div className="">
              <p className="font-semibold">
                {context?.user && context?.user?.displayName}
              </p>
              <p className="text-sm text-gray-500">
                {context?.user && context?.user?.username}
              </p>
            </div>
          </>
        )}
      </div>

      <div>
        {/* <h2 className="font-2xl font-bold">Actions</h2> */}
        <div className="mb-4">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg my-2">
            <pre className="font-mono text-xs whitespace-pre-wrap break-words max-w-[260px] overflow-x-">
              sdk.actions.openUrl <br />
              {JSON.stringify(context, null, 2)}
            </pre>
          </div>
        </div>

        {/* external link test */}
        <div className="">
          <Button onClick={openUrl} className="w-full">
            Open Link
          </Button>
        </div>

        {/* wallet functions */}
        <div className="mt-5">
          {address && (
            <div className="my-2 text-xs">
              Address: <pre className="inline">{address}</pre>
            </div>
          )}

          <div className="mb-4">
            <Button
              variant={"outline"}
              className="w-full"
              onClick={() =>
                isConnected
                  ? disconnect()
                  : connect({ connector: config.connectors[0] })
              }
            >
              {isConnected ? "Disconnect" : "Connect"}
            </Button>
          </div>

          {isConnected && (
            <>
              <div className="mb-4">
                <Button
                  className="w-full"
                  onClick={sendTx}
                  disabled={!isConnected || isSendTxPending}
                  //   isLoading={isSendTxPending}
                >
                  Send Transaction
                </Button>
                {isSendTxError && renderError(sendTxError)}
                {txHash && (
                  <div className="mt-2 text-xs">
                    <div>Hash: {txHash}</div>
                    <div>
                      Status:{" "}
                      {isConfirming
                        ? "Confirming..."
                        : isConfirmed
                        ? "Confirmed!"
                        : "Pending"}
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="mb-4">
                <Button
                  className="w-full"
                  onClick={sign}
                  disabled={!isConnected || isSignPending}
                //   isLoading={isSignPending}
                >
                  Sign Message
                </Button>
                {isSignError && renderError(signError)}
              </div>
              <div className="mb-4">
                <Button
                  className="w-full"
                  onClick={signTyped}
                  disabled={!isConnected || isSignTypedPending}
                //   isLoading={isSignTypedPending}
                >
                  Sign Typed Data
                </Button>
                {isSignTypedError && renderError(signTypedError)}
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
