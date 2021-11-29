'use strict';

// const axios = require('axios');
import Axios from 'axios';
import {RequestInterface} from "./RequestInterface";
import {injectable} from "inversify";

@injectable()
export class RequestAdapter implements RequestInterface{
    public async get(url): Promise<any> {
        return Axios.get(url);
    }
}

// module.exports = new RequestAdapter();
