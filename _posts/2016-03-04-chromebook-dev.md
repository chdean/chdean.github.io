---
title: Development on a Chromebook without Dev Mode
date: 2016-03-04
layout: post
---

Chromebooks with developer mode enabled and [crouton][1] installed make pretty capable machines, but there are downsides.  Chromebooks typically have extremely limited storage capacity, making it difficult to install a full set of tools.  Enabling developer mode also forces a scary looking boot screen that is annoying and more critically makes it extremely easy (as I've learned repeatedly) to wipe the machine.

Locally installed development tools also seem to run against the whole ethos.  Part of the appeal of Chromebooks is being able to wipe the machine and be back up within five minutes.  Having to reconfigure a bunch of programs negates that. (Though you could backup the Crouton chroot... but still).

Thankfully, there are ways to make Chromebooks useful for software development without entering dev mode.  Paired up with a couple VPSs, I've been mostly satisfied using my Chromebook for all my coding and GIS work.

* [Secure Shell][2] and [mosh][3] - Both work as expected.  Secure Shell supports port forwarding, which is nice for running test servers or accessing other services on the remote machine.  Mosh ably handles shoddy connections.
* [SFTP File System][4] - Mounts SFTP servers in Files, letting you access files on a server transparently with other ChromeOS apps.
* [Caret][5] - Sublime Text inspired editor.
* [VNC Viewer][6] - Surprisingly responsive.  This is a necessary evil for me to use graphical GIS software.

[1]: https://github.com/dnschneid/crouton
[2]: https://chrome.google.com/webstore/detail/secure-shell/pnhechapfaindjhompbnflcldabbghjo
[3]: https://chrome.google.com/webstore/detail/mosh/ooiklbnjmhbcgemelgfhaeaocllobloj
[4]: https://chrome.google.com/webstore/detail/sftp-file-system/gbheifiifcfekkamhepkeogobihicgmn
[5]: https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml
[6]: https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla
