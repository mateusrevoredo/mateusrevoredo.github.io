/**
 * @fileoverview Font Awesome 5
 * @link https://fontawesome.com/how-to-use/with-the-api/
 */

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { 
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faInstagram,
	faGithub
} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF,faLinkedinIn,faTwitter,faInstagram,faGithub)
dom.i2svg()