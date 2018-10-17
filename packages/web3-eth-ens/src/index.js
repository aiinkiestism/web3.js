/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 *
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

"use strict";

import {version} from '../package.json';
import ContractPackage from 'web3-eth-contract';
import PromiEventPackage from 'web3-core-promievent';
import REGISTRY_ABI from '../ressources/ABI/Registry';
import RESOLVER_ABI from '../ressources/ABI/Resolver';
import ENSPackageFactory from './factories/ENSPackageFactory';

export default { // TODO: overthink the ens package architecture and refactor it.
    version,

    /**
     * Returns the ENS object
     *
     * @method ENS
     *
     * @param {AbstractProviderAdapter|EthereumProvider} provider
     * @param {Network} net
     * @param {Accounts} accounts
     *
     * @returns {ENS}
     */
    ENS(provider, net, accounts) {
        return new ENSPackageFactory().createENS(
            provider,
            net,
            accounts,
            ContractPackage,
            REGISTRY_ABI,
            RESOLVER_ABI,
            PromiEventPackage
        );
    }
};
