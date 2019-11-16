import { Transport as CoreTransport } from "../core";

/**
 * Transport.
 *
 * @remarks
 * Transport layer interface expected by the api.
 * @public
 */
export interface Transport extends CoreTransport  {

  /**
   * Connect to network.
   */
  connect(): Promise<void>;

  /**
   * Disconnect from network.
   */
  disconnect(): Promise<void>;

  /**
   * Returns true if the transport is connected.
   */
  isConnected(): boolean;

  /**
   * Events
   */
  on(event: "connected" | "disconnected" | "transportError", listener: () => void): this;
  on(event: "message", listener: (message: string) => void): this;
  on(name: string, callback: (...args: any[]) => void): this;
}
