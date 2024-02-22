'use strict';

const { LogLevel } = require("@opentelemetry/core");
const { NodeTracerProvider } = require("@opentelemetry/node");

const provider = new NodeTracerProvider({
    logLevel: LogLevel.ERROR
});

provider.register();
