//@ts-nocheck
import * as _78 from "./applications/transfer/v1/genesis";
import * as _79 from "./applications/transfer/v1/query";
import * as _80 from "./applications/transfer/v1/transfer";
import * as _81 from "./applications/transfer/v1/tx";
import * as _82 from "./applications/transfer/v2/packet";
import * as _83 from "./core/channel/v1/channel";
import * as _84 from "./core/channel/v1/genesis";
import * as _85 from "./core/channel/v1/query";
import * as _86 from "./core/channel/v1/tx";
import * as _87 from "./core/client/v1/client";
import * as _88 from "./core/client/v1/genesis";
import * as _89 from "./core/client/v1/query";
import * as _90 from "./core/client/v1/tx";
import * as _91 from "./core/commitment/v1/commitment";
import * as _92 from "./core/connection/v1/connection";
import * as _93 from "./core/connection/v1/genesis";
import * as _94 from "./core/connection/v1/query";
import * as _95 from "./core/connection/v1/tx";
import * as _96 from "./lightclients/localhost/v1/localhost";
import * as _97 from "./lightclients/solomachine/v1/solomachine";
import * as _98 from "./lightclients/solomachine/v2/solomachine";
import * as _99 from "./lightclients/tendermint/v1/tendermint";
import * as _158 from "./applications/transfer/v1/tx.amino";
import * as _159 from "./core/channel/v1/tx.amino";
import * as _160 from "./core/client/v1/tx.amino";
import * as _161 from "./core/connection/v1/tx.amino";
import * as _162 from "./applications/transfer/v1/tx.registry";
import * as _163 from "./core/channel/v1/tx.registry";
import * as _164 from "./core/client/v1/tx.registry";
import * as _165 from "./core/connection/v1/tx.registry";
import * as _166 from "./applications/transfer/v1/query.rpc.Query";
import * as _167 from "./core/channel/v1/query.rpc.Query";
import * as _168 from "./core/client/v1/query.rpc.Query";
import * as _169 from "./core/connection/v1/query.rpc.Query";
import * as _170 from "./applications/transfer/v1/tx.rpc.msg";
import * as _171 from "./core/channel/v1/tx.rpc.msg";
import * as _172 from "./core/client/v1/tx.rpc.msg";
import * as _173 from "./core/connection/v1/tx.rpc.msg";
import * as _178 from "./rpc.query";
import * as _179 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._78,
        ..._79,
        ..._80,
        ..._81,
        ..._158,
        ..._162,
        ..._166,
        ..._170
      };
      export const v2 = {
        ..._82
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._159,
        ..._163,
        ..._167,
        ..._171
      };
    }
    export namespace client {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._160,
        ..._164,
        ..._168,
        ..._172
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._91
      };
    }
    export namespace connection {
      export const v1 = {
        ..._92,
        ..._93,
        ..._94,
        ..._95,
        ..._161,
        ..._165,
        ..._169,
        ..._173
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._96
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._97
      };
      export const v2 = {
        ..._98
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._99
      };
    }
  }
  export const ClientFactory = {
    ..._178,
    ..._179
  };
}