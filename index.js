// Copyright 2019-2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This is a generated sample, using the typeless sample bot. Please
// look for the source TypeScript sample (.ts) for modifications.
'use strict';

/**
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Publish Message
//   description: Publishes a message to a topic.
//   usage: node publishMessage.js <topic-name-or-id> <data>

// [START pubsub_publish_with_error_handler]
// [START pubsub_quickstart_publisher]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const data = JSON.stringify({foo: 'bar'});

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishMessage(topicNameOrId, data) {
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);

    try {
    const messageId = await pubSubClient
        .topic(topicNameOrId)
        .publishMessage({data: dataBuffer});
        console.log(`Message ${messageId} published.`);
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        process.exitCode = 1;
    }
}
// [END pubsub_publish_with_error_handler]
// [END pubsub_quickstart_publisher]

function main(
    topicNameOrId = 'order_topic',
    data = JSON.stringify({foo: 'bar34'})
) {
    publishMessage(topicNameOrId, data).catch(err => {
        console.error(err.message);
        process.exitCode = 1;
        return "El mensaje no se publico";
    });
    return "Mensaje publicado"
}


// main(...process.argv.slice(2));


const express = require("express");
const app = express();
const port = 8080;
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    const {message} = req.body;
    // console.log(message)
    const result = main("order_topic", JSON.stringify(message));

    // res.json("hola")
    res.json({
        result
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


