rs.initiate()
rs.add('192.168.99.10:47026')
cfg = rs.conf()
cfg.members[0].host = '192.168.99.10:37026'
rs.reconfig(cfg)
rs.status()
